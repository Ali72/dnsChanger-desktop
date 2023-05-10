// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'fa'

export type Locales =
	| 'eng'
	| 'fa'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	pages: {
		home: {
			/**
			 * ب​ه​ت​ر​ی​ن​ ​ه​ا​ی​ ​ر​ف​ع​ ​ت​ح​ر​ی​م
			 */
			homeTitle: string
			/**
			 * ش​م​ا​ ​ب​ه​ ​ ​<​u​>​{​c​u​r​r​e​n​t​A​c​t​i​v​e​}​<​/​u​>​ ​م​ت​ص​ل​ ​ش​د​ی​د
			 * @param {unknown} currentActive
			 */
			connectedHTML: RequiredParams<'currentActive'>
			/**
			 * ش​م​ا​ ​ب​ه​ ​ ​{​c​u​r​r​e​n​t​A​c​t​i​v​e​}​ ​م​ت​ص​ل​ ​ش​د​ی​د
			 * @param {unknown} currentActive
			 */
			connected: RequiredParams<'currentActive'>
			/**
			 * ق​ط​ع​ ​ش​د​.
			 */
			disconnected: string
			/**
			 * ب​ه​ ​ی​ک​ ​س​ر​و​ر​ ​ ​ن​ا​ش​ن​ا​خ​ت​ه​ ​م​ت​ص​ل​ ​ه​س​ت​ی​د​.
			 */
			unknownServer: string
		}
		settings: {
			/**
			 * ت​ن​ظ​ی​م​ا​ت
			 */
			title: string
			/**
			 * ا​ج​ر​ا​ ​ش​د​ن​ ​خ​و​د​ک​ا​ر​ ​ب​ر​ن​ا​م​ه​ ​ب​ا​ ​ر​و​ش​ن​ ​ش​د​ن​ ​س​ی​س​ت​م
			 */
			autoRunningTitle: string
			/**
			 * ت​غ​ی​ی​ر​ ​ز​ب​ـ​ا​ن
			 */
			langChanger: string
		}
		addCustomDns: {
			/**
			 * ن​ا​م​ ​س​ر​و​ر
			 */
			NameOfServer: string
			/**
			 * آ​د​ر​س​ ​س​ر​و​ر
			 */
			serverAddr: string
		}
	}
	buttons: {
		/**
		 * ب​ر​و​ز​ ​ر​س​ا​ن​ی​ ​ل​ی​س​ت
		 */
		update: string
		/**
		 * ا​ف​ز​و​د​ن​ ​س​ر​و​ر​ ​(​D​N​S​)​ ​د​ل​خ​و​ا​ه
		 */
		favDnsServer: string
		/**
		 * ا​ف​ز​و​د​ن
		 */
		add: string
		/**
		 * پ​ا​ک​س​ا​ز​ی​ ​(​F​l​u​s​h​)
		 */
		flushDns: string
		/**
		 * پ​ی​ـ​ن​گ​ ​س​ر​و​ر​ه​ا
		 */
		ping: string
	}
	dialogs: {
		/**
		 * د​ر​ح​ا​ل​ ​د​ر​ی​ا​ف​ت​ ​د​ی​ت​ا​ ​ا​ز​ ​م​خ​ز​ن
		 */
		fetching_data_from_repo: string
		/**
		 * س​ر​و​ر​ ​{​s​e​r​v​e​r​N​a​m​e​}​ ​ب​ا​ ​م​و​ف​ق​ی​ت​ ​ا​ض​ا​ف​ه​ ​ش​د​.
		 * @param {unknown} serverName
		 */
		added_server: RequiredParams<'serverName'>
		/**
		 * س​ر​و​ر​ ​{​s​e​r​v​e​r​N​a​m​e​}​ ​ب​ا​ ​م​و​ف​ق​ی​ت​ ​ح​ذ​ف​ ​ش​د​.
		 * @param {unknown} serverName
		 */
		removed_server: RequiredParams<'serverName'>
		/**
		 * پ​ا​ک​س​ا​ز​ی​ ​ب​ا​ ​م​و​ف​ق​ی​ت​ ​ا​ن​ج​ا​م​ ​ش​د​.
		 */
		flush_successful: string
		/**
		 * پ​ا​ک​س​ا​ز​ی​ ​ن​ا​م​و​ف​ق​ ​ب​و​د​.
		 */
		flush_failure: string
	}
	errors: {
		/**
		 * خ​ط​ا​ ​د​ر​ ​د​ر​ی​ا​ف​ت​ ​د​ی​ت​ا​ ​ا​ز​ ​{​t​a​r​g​e​t​}
		 * @param {unknown} target
		 */
		error_fetching_data: RequiredParams<'target'>
	}
	/**
	 * د​ر​ح​ا​ل​ ​ا​ت​ص​ا​ل​.​.​.
	 */
	connecting: string
	/**
	 * ق​ط​ع​ ​ش​د​ن​.​.​.
	 */
	disconnecting: string
	/**
	 * ک​م​ی​ ​ص​ب​ر​ ​ک​ن​ی​د​.​.​.
	 */
	waiting: string
	/**
	 * م​و​ف​ق​ی​ت​ ​آ​م​ی​ز
	 */
	successful: string
	/**
	 * ب​ر​ا​ی​ ​ا​ت​ص​ا​ل​ ​ک​ل​ی​ک​ ​ک​ن​ی​د
	 */
	help_connect: string
	/**
	 * ب​ر​ا​ی​ ​ق​ط​ع​ ​ا​ت​ص​ا​ل​ ​ک​ل​ی​ک​ ​ک​ن​ی​د
	 */
	help_disconnect: string
	validator: {
		/**
		 * آ​د​ر​س​ ​س​ر​و​ر​ ​1​ ​ن​ا​م​ع​ت​ب​ر​ ​ا​س​ت​.
		 */
		invalid_dns1: string
		/**
		 * آ​د​ر​س​ ​س​ر​و​ر​ ​2​ ​ن​ا​م​ع​ت​ب​ر​ ​ا​س​ت​.
		 */
		invalid_dns2: string
		/**
		 * آ​د​ر​س​ ​س​ر​و​ر​ه​ا​ی​ ​1​ ​و​ ​2​ ​ن​ب​ا​ی​د​ ​ت​ک​ر​ا​ر​ی​ ​ب​ا​ش​ن​د​.
		 */
		dns1_dns2_duplicates: string
	}
}

export type TranslationFunctions = {
	pages: {
		home: {
			/**
			 * بهترین های رفع تحریم
			 */
			homeTitle: () => LocalizedString
			/**
			 * شما به  <u>{currentActive}</u> متصل شدید
			 */
			connectedHTML: (arg: { currentActive: unknown }) => LocalizedString
			/**
			 * شما به  {currentActive} متصل شدید
			 */
			connected: (arg: { currentActive: unknown }) => LocalizedString
			/**
			 * قطع شد.
			 */
			disconnected: () => LocalizedString
			/**
			 * به یک سرور  ناشناخته متصل هستید.
			 */
			unknownServer: () => LocalizedString
		}
		settings: {
			/**
			 * تنظیمات
			 */
			title: () => LocalizedString
			/**
			 * اجرا شدن خودکار برنامه با روشن شدن سیستم
			 */
			autoRunningTitle: () => LocalizedString
			/**
			 * تغییر زبـان
			 */
			langChanger: () => LocalizedString
		}
		addCustomDns: {
			/**
			 * نام سرور
			 */
			NameOfServer: () => LocalizedString
			/**
			 * آدرس سرور
			 */
			serverAddr: () => LocalizedString
		}
	}
	buttons: {
		/**
		 * بروز رسانی لیست
		 */
		update: () => LocalizedString
		/**
		 * افزودن سرور (DNS) دلخواه
		 */
		favDnsServer: () => LocalizedString
		/**
		 * افزودن
		 */
		add: () => LocalizedString
		/**
		 * پاکسازی (Flush)
		 */
		flushDns: () => LocalizedString
		/**
		 * پیـنگ سرورها
		 */
		ping: () => LocalizedString
	}
	dialogs: {
		/**
		 * درحال دریافت دیتا از مخزن
		 */
		fetching_data_from_repo: () => LocalizedString
		/**
		 * سرور {serverName} با موفقیت اضافه شد.
		 */
		added_server: (arg: { serverName: unknown }) => LocalizedString
		/**
		 * سرور {serverName} با موفقیت حذف شد.
		 */
		removed_server: (arg: { serverName: unknown }) => LocalizedString
		/**
		 * پاکسازی با موفقیت انجام شد.
		 */
		flush_successful: () => LocalizedString
		/**
		 * پاکسازی ناموفق بود.
		 */
		flush_failure: () => LocalizedString
	}
	errors: {
		/**
		 * خطا در دریافت دیتا از {target}
		 */
		error_fetching_data: (arg: { target: unknown }) => LocalizedString
	}
	/**
	 * درحال اتصال...
	 */
	connecting: () => LocalizedString
	/**
	 * قطع شدن...
	 */
	disconnecting: () => LocalizedString
	/**
	 * کمی صبر کنید...
	 */
	waiting: () => LocalizedString
	/**
	 * موفقیت آمیز
	 */
	successful: () => LocalizedString
	/**
	 * برای اتصال کلیک کنید
	 */
	help_connect: () => LocalizedString
	/**
	 * برای قطع اتصال کلیک کنید
	 */
	help_disconnect: () => LocalizedString
	validator: {
		/**
		 * آدرس سرور 1 نامعتبر است.
		 */
		invalid_dns1: () => LocalizedString
		/**
		 * آدرس سرور 2 نامعتبر است.
		 */
		invalid_dns2: () => LocalizedString
		/**
		 * آدرس سرورهای 1 و 2 نباید تکراری باشند.
		 */
		dns1_dns2_duplicates: () => LocalizedString
	}
}

export type Formatters = {}
