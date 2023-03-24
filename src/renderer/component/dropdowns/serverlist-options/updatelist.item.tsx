import _ from 'lodash';
import axios from 'axios';
import { Dropdown } from 'react-daisyui';
import { RxUpdate } from 'react-icons/rx';
import { useContext, useState } from 'react';

import { serversContext } from '../../../context/servers.context';
import { activityContext } from '../../../context/activty.context';
import { ActivityContext } from '../../../interfaces/activty.interface';
import { Server } from '../../../../shared/interfaces/server.interface';
import { UrlsConstant } from '../../../../shared/constants/urls.constant';
import { ServersContext } from '../../../interfaces/servers-context.interface';

const cacheBuster = (url: string) => `${url}?cb=${Date.now()}`;

export function UpdateListItemComponent() {
    const serversContextData: ServersContext = useContext<ServersContext>(serversContext);
    const activityContextData = useContext<ActivityContext>(activityContext)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function updateHandler() {
        if (activityContextData.isWaiting)
            return alert('لطفا صبر کنید...'); //todo add toast
        try {
            setIsLoading(true);

            activityContextData.setStatus('در حال دریافت از مخزن...');
            activityContextData.setIsWaiting(true);

            const response = await axios.get<Server[]>(cacheBuster(UrlsConstant.STORE));
            const servers = serversContextData.servers.concat(response.data);
            const uniqList: Server[] = _.uniqWith(servers, _.isEqual);
            
            serversContextData.setServers(uniqList);
            
            await window.ipc.reloadServerList(uniqList);
        } catch (error) {
            window.ipc.dialogError('fetching error', 'خطا در دریافت دیتا از مخزن');
        } finally {
            activityContextData.setIsWaiting(false);
            activityContextData.setStatus('');
            setIsLoading(false);
        }
    }

    return (
        <Dropdown.Item onClick={() => updateHandler()}>
            <RxUpdate
                className={`mr-2 ${isLoading ? 'spinner' : ''}`} />
            بروزرسانی لیست
        </Dropdown.Item>
    )
}
