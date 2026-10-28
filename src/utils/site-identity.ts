/** Resolved media reference from getSiteSettings() */
export interface MediaReference {
	mediaId: string;
	alt?: string;
	url?: string;
}

export interface BlogSiteIdentitySettings {
	title?: string;
	tagline?: string;
	logo?: MediaReference;
	favicon?: MediaReference;
}

const DEFAULT_SITE_TITLE = "uuprints";
const DEFAULT_SITE_TAGLINE = "智能热转印设备与耗材一站式供应商";

export function resolveBlogSiteIdentity(settings?: BlogSiteIdentitySettings) {
	return {
		// 优先读后台 Settings(Settings → Site identity)的 title/tagline；
		// uuprints-db 是独立库，硬编码限制解除。
		// 后台未配置时回落到 uuprints 默认值。
		siteTitle: settings?.title || DEFAULT_SITE_TITLE,
		siteTagline: settings?.tagline || DEFAULT_SITE_TAGLINE,
		siteLogo: settings?.logo?.url ? settings.logo : null,
	};
}
