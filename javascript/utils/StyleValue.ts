import { Image, processColor } from "react-native";

import BridgeValue, {
  type RawValueType,
  type StyleValueJSON,
} from "./BridgeValue";
import { AllLayerStyleProps } from "./MaplibreStyles";
import { getStyleType } from "./styleMap";

export type StyleValue = {
  styletype: string;
  stylevalue: StyleValueJSON;
};

export function transformStyle(
  style: AllLayerStyleProps | undefined,
): undefined | { [key: string]: StyleValue } {
  if (!style) {
    return;
  }

  const nativeStyle: { [key: string]: StyleValue } = {};
  const styleProps = Object.keys(style) as (keyof typeof style)[];
  for (const styleProp of styleProps) {
    const styleType = getStyleType(styleProp);
    let rawStyle: RawValueType | undefined = style[styleProp];

    if (styleType === "color" && typeof rawStyle === "string") {
      const color = processColor(rawStyle);
      if (color === null || color === undefined || typeof color === "symbol") {
        console.error(
          `@maplibre/maplibre-react-native: Invalid color value ${rawStyle}, using #ff0000 (red) instead`,
        );
        rawStyle = "ff0000";
      } else {
        rawStyle = color;
      }
    } else if (styleType === "image" && typeof rawStyle === "number") {
      rawStyle =
        (Image.resolveAssetSource(rawStyle) as unknown as RawValueType) || {};
    }

    const bridgeValue = new BridgeValue(rawStyle);
    nativeStyle[styleProp] = {
      styletype: styleType,
      stylevalue: bridgeValue.toJSON(),
    };
  }

  return nativeStyle;
}
