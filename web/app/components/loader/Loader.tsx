const Loader = ({ title }:{title:string}) => {
    return (
        <div className='flex gap-2 min-h-screen items-center justify-center font-semibold'>
            <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin"></div>
            {title}
        </div>
    );
}
export default Loader