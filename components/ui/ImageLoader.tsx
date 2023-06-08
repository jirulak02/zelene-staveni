type ImagesLoaderType = {
	className: string;
};

export default function ImageLoader(className: ImagesLoaderType) {
	return <div className={`animate-pulse bg-neutral-500 ${className}`}></div>;
}
