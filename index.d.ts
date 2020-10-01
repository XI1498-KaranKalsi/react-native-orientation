export type OrientationType =
  | 'PORTRAIT'
  | 'LANDSCAPE'
  | 'PORTRAITUPSIDEDOWN'
  | 'LANDSCAPE-LEFT'
  | 'LANDSCAPE-RIGHT';

declare const _default: {
  lockToPortrait(): void;
  lockToLandscape(): void;
  lockToLandscapeLeft(): void;
  lockToLandscapeRight(): void;
  unlockAllOrientations(): void;
  getOrientation(cb: (error: any, orientation: OrientationType) => void): void;
  getSpecificOrientation(cb: (error: any, orientation: OrientationType) => void): void;
};
export default _default;
