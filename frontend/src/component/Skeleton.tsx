export const Skeleton = () => {
    return <div className="flex justify-center">
        <div className="mt-2 border-b border-slate-300 w-screen max-w-lg">
                        <div>
                            <div className="pr-2">
                            <div className="h-2 bg-slate-300 rounded-full bg-slate-300 max-w-[360px] mb-2.5"></div>
                            <div className="h-2 bg-slate-300 rounded-full bg-slate-300 mb-2.5"></div>
                            <div className="h-2 bg-slate-300 rounded-full bg-slate-300 mb-2.5"></div>
                        </div>
                        <div className="font-xs text-slate-300">
                             <div className="h-2 bg-slate-300 rounded-full bg-slate-300 max-w-[300px] mb-2.5"></div>
                        </div>
                        <div className="text-green-400">
                             <div className="h-2 bg-slate-300 rounded-full bg-slate-300 max-w-[360px] mb-2.5"></div>
                        </div>
                        </div>
                        <div className="font-bold text-xl pt-2">
                             <div className="h-2 bg-slate-300 rounded-full bg-slate-300 mb-2.5"></div>
                        </div>
                        <div className="font-xs text-slate-300">
                             <div className="h-2 bg-slate-300 rounded-full bg-slate-300 max-w-[360px] mb-2.5"></div>
                        </div>
                </div>
    </div>
}

export const SpecificBlogSkeleton = () => {
    return <div>
                <div className="col-span-8">
            <div className="h-2 bg-slate-300 rounded-full bg-slate-300 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-slate-300 rounded-full bg-slate-300 max-w-[300px] mb-2.5"></div>
                    <div className="pt-2 text-slate-300">
                    <div className="h-2 bg-slate-300 rounded-full bg-slate-300 max-w-[360px] mb-2.5"></div>
                        </div>           
        </div>
            <div className="col-span-4">
            <div className="h-2 bg-slate-300 rounded-full bg-slate-300 max-w-[360px] mb-2.5"></div>
                    <div className="flex justify-center items-center gap-4">
                            <div>
                                <div className="h-2 bg-slate-300 rounded-full bg-slate-300 max-w-[360px] mb-2.5"></div>
                        </div>
                    </div>
            </div>
    </div>
}
