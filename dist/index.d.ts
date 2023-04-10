declare const animationFun: (callback: (progress: number) => boolean | void, timeout: number, sync?: boolean) => Promise<unknown>;
export default animationFun;
