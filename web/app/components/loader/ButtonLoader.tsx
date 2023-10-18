const ButtonLoader = ({ title }:{title:string}) => {
    return (
        <div className='flex gap-2 items-center font-semibold justify-center'>
            <div className="w-5 h-5 border-4 border-dashed rounded-full animate-spin"></div>
            {title}
        </div>
    );
}
export default ButtonLoader