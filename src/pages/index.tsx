import { Page } from '@/components/Page'
import { Selection } from '@/components/Selector/Selection'
import { SelectorLayout } from '@/layouts/Selector'
import { trpc } from '@/utils/trpc'

/**
 * TODO: Add "no rpgs found"
 */
export default function HomePage() {
  const rpgsQuery = trpc.rpg.selectAll.useQuery()

  return (
    <Page>
      <SelectorLayout loading={rpgsQuery.isLoading}>
        <div className='px-6 py-8'>
          <h1 className='text-neutral12 text-3xl font-bold mb-8'>
            Selecione o RPG
          </h1>
          <div>
            {rpgsQuery.data &&
              rpgsQuery.data.map((rpg, index) => (
                <Selection
                  name={rpg.name}
                  comment={rpg.author}
                  href={`rpg/${rpg.id}`}
                  key={index}
                />
              ))}
          </div>
        </div>
      </SelectorLayout>
    </Page>
  )
}
