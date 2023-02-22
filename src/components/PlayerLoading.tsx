export function PlayerLoading() {
  return (
    <div className="animate-pulse border border-zinc-700 shadow rounded-md p-4 w-full">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-zinc-700 w-[64px] h-[64px]"></div>

        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-zinc-700 rounded-md w-28"></div>
          <div className="h-4 bg-zinc-700 rounded-md w-16"></div>
        </div>

        <div className="w-[24px] h-[24px] rounded-md bg-zinc-700"></div>
      </div>
    </div>
  )
}
