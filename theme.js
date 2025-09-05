import { DynamicScheme, genStyle, Hct, Variant } from "m3-dreamland";
import { transform } from 'lightningcss';

export default () => {
	let scheme = new DynamicScheme({
		sourceColorHct: Hct.fromInt(0x00b89576),
		contrastLevel: 0,
		specVersion: "2025",
		variant: Variant.VIBRANT,
		isDark: true,
	});

	return transform({ 
		filename: "m3dl.theme.css",
		code: Buffer.from(genStyle("m3dl-colon3", scheme, "expressive")),
		minify: true
	}).code;
}
