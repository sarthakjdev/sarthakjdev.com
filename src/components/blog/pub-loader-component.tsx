import { clsx } from 'clsx'
import { PublicationLayout } from 'root/generated/graphql'

function PubLoaderComponent(props: { layout?: PublicationLayout | null }) {
	const { layout } = props
	return (
		<>
			<div
				className={clsx(
					'mb-16',
					layout === PublicationLayout.Grid
						? 'w-full px-4 lg:w-1/2 lg:px-8'
						: 'px-4 lg:px-16'
				)}
			>
				<div
					className={
						layout === PublicationLayout.Grid
							? 'flex flex-col-reverse'
							: 'flex w-full flex-row flex-wrap items-start'
					}
				>
					<div
						className={layout === PublicationLayout.Grid ? 'w-full' : 'w-full lg:w-3/5'}
					>
						<div className="mb-4 h-8 w-full rounded bg-slate-200 lg:w-3/4 dark:bg-slate-800" />
						<div className="mb-4 h-4 rounded bg-slate-200 lg:w-2/3 dark:bg-slate-800" />
						<div className="mb-4 h-4 rounded bg-slate-200 lg:w-2/3 dark:bg-slate-800" />
						<div className="mb-4 h-4 rounded bg-slate-200 lg:w-2/3 dark:bg-slate-800" />
					</div>
					<div
						className={
							layout === PublicationLayout.Grid
								? 'mb-6 w-full'
								: 'mt-6 w-full lg:mt-0 lg:w-2/5 lg:pl-8'
						}
					>
						<div
							className={clsx(
								'post-cover',
								'bg-slate-200 dark:bg-slate-800',
								layout === PublicationLayout.Grid
									? 'w-full rounded-lg'
									: 'h-40 w-full rounded-lg'
							)}
						/>
					</div>
				</div>
			</div>
			<div
				className={clsx(
					'mb-16',
					layout === PublicationLayout.Grid
						? 'w-full px-4 lg:w-1/2 lg:px-8'
						: 'px-4 lg:px-16'
				)}
			>
				<div
					className={
						layout === PublicationLayout.Grid
							? 'flex flex-col-reverse'
							: 'flex w-full flex-row flex-wrap items-start'
					}
				>
					<div
						className={layout === PublicationLayout.Grid ? 'w-full' : 'w-full lg:w-3/5'}
					>
						<div className="mb-4 h-8 w-full rounded bg-slate-200 lg:w-3/4 dark:bg-slate-800" />
						<div className="mb-4 h-4 rounded bg-slate-200 lg:w-2/3 dark:bg-slate-800" />
						<div className="mb-4 h-4 rounded bg-slate-200 lg:w-2/3 dark:bg-slate-800" />
						<div className="mb-4 h-4 rounded bg-slate-200 lg:w-2/3 dark:bg-slate-800" />
					</div>
					<div
						className={
							layout === PublicationLayout.Grid
								? 'mb-6 w-full'
								: 'mt-6 w-full lg:mt-0 lg:w-2/5 lg:pl-8'
						}
					>
						<div
							className={clsx(
								'post-cover',
								'bg-slate-200 dark:bg-slate-800',
								layout === PublicationLayout.Grid
									? 'w-full rounded-lg'
									: 'h-40 w-full rounded-lg'
							)}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default PubLoaderComponent
