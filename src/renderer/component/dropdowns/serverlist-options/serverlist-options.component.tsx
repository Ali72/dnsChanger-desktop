import { Dropdown } from 'react-daisyui';
import { useState, useContext } from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';

import { AddCustomServerItem } from './addServer.item';
import { UpdateListItemComponent } from './updatelist.item';
import { serversContext } from '../../../context/servers.context';
import { AddDnsModalComponent } from '../../modals/add-dns.component';
import { ServersContext } from '../../../interfaces/servers-context.interface';
import { FlushDnsItem } from './flushdns.item';
import { FetchPingItem } from './fetchPing.item';

export function ServerListOptionsDropDownComponent() {
    const [isOpenModal, setIsOpenModal] = useState<boolean>();
    const serversContextData: ServersContext = useContext<ServersContext>(serversContext);

    function toggleOpenModal() {
        setIsOpenModal(!isOpenModal)
    }

    return (
        <Dropdown>
            <Dropdown.Toggle size='xs' color={"ghost"}>
                <IoEllipsisVertical />
            </Dropdown.Toggle>
            <Dropdown.Menu className={'absolute w-80'} dir={"auto"}>
                <UpdateListItemComponent />
                <AddCustomServerItem onClick={toggleOpenModal} />
                <FetchPingItem />
                <FlushDnsItem />
            </Dropdown.Menu>
            <AddDnsModalComponent isOpen={isOpenModal} setIsOpen={setIsOpenModal}
                cb={(va) => {
                    serversContextData.servers.push(va)
                    serversContextData.setServers([...serversContextData.servers])
                }}
            />
        </Dropdown>
    )
}
