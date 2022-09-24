import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import EthIcon from '../components/EthIcon'
import LoadingIcon from '../components/LoadingIcon'
import SortIcon from '../components/SortIcon'

type Bluechips = {
    bluechips: string,
    logo: string,
    eth_24h: number,
    eth_7d: number,
    weth_24h: number,
    weth_7d: number,
    conf_ind_24h: number,
    conf_ind_7d: number,
    confidence_level_24h: string,
    confidence_level_7d: string
}

type Sort2 = {
  key: keyof Bluechips,
  value: number,
}

let initData2: Bluechips[] = []

const DataTable2 = () => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Bluechips[]>([])
  const [sort, setSort] = useState<Sort2 | undefined>(undefined)

  useEffect(() => {
    fetch('/api/bluechips').then(resp => resp.json()).then(data => {
      initData2 = data
      setData(data)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (sort) {
      if (sort.value === 0) {
        setData(initData2)
      } else {
        const arr = [...data]
        arr.sort((a, b) => {
          if (b[sort.key] === a[sort.key]) return 0
          if (a[sort.key] === null) return 1
          if (b[sort.key] === null) return -1
          return sort.value * ((b[sort.key] as number || 0) - (a[sort.key] as number || 0))
        })
        setData(arr)
      }
    }
  }, [sort])

  const changeSort2 = (key: keyof Bluechips) => {
    setSort(pre => {
      let value = 1
      if (pre && key === pre.key) {
        if (pre.value - 1 > -2) {
          value = pre.value - 1
        }
      }
      return { key, value }
    })
  }
  
  if (loading) {
    return (
      <div className='flex min-h-[20rem] w-full justify-center items-center'>
        <LoadingIcon className='w-16 h-16' />
      </div>
    )
  }

  return (

    <table className="table-fixed w-full">
      <thead>
        <tr className='text-left text-slate-400'>
          <th className='w-1/4 px-4 py-2'>Collection</th>
          
          <th className='px-4 py-2'>
            <div className='flex flex-row items-center gap-1 justify-end'>
              24h Confidence Index
              <SortIcon className='w-4 h-4 cursor-pointer' sortValue={sort && sort.key === 'conf_ind_24h' ? sort.value : 0} onClick={() => changeSort2('conf_ind_24h')} />
            </div>
          </th>
          <th className='px-4 py-2'>
            <div className='flex flex-row items-center gap-1 justify-end'>
              24h Confidence Level
            </div>
          </th>
          <th className='px-4 py-2'>
            <div className='flex flex-row items-center gap-1 justify-end'>
              7d Confidence Index
              <SortIcon className='w-4 h-4 cursor-pointer' sortValue={sort && sort.key === 'conf_ind_7d' ? sort.value : 0} onClick={() => changeSort2('conf_ind_7d')} />
            </div>
          </th>
          <th className='px-4 py-2'>
            <div className='flex flex-row items-center gap-1 justify-end'>
              7d Confidence Level
            </div>
          </th>
        </tr>
      </thead>

      <tbody>
        {
          data.map((item: Bluechips) => (
            <tr className='hover:bg-gray-100 cursor-pointer rounded overflow-hidden' key={item.bluechips}>
              <td className='p-2 truncate rounded-l'>
                <div className='flex flex-row items-center gap-2'>
                  <img src={item.logo} alt="" className='w-8 h-8 rounded-full bg-gray-200' />
                  <span className='font-medium'>{item.bluechips}</span>
                </div>
              </td>
            
              <td className='py-2 px-6 text-right'>
                {item.conf_ind_24h === 0 ? '--' : item.conf_ind_24h}          
              </td>
            
              <td className='p-2 text-right rounded-r text-xs'>
              {
                (typeof item.conf_ind_24h === 'number') ? (
                  <>
                    {
                      'low' === item.confidence_level_24h && <span className='px-3 py-1 rounded-full bg-green-200 text-green-600'>Low</span>
                    }
                     {
                      'high' === item.confidence_level_24h && <span className='px-3 py-1 rounded-full bg-red-200 text-red-600'>High</span>
                    }
                    {
                      !item.confidence_level_24h && '--'
                    }
                  </>
                ) : '--'
              }
              </td>

              <td className='py-2 px-6 text-right text-s'>
                {item.conf_ind_7d === 0 ? '--' : item.conf_ind_7d}          
              </td>
            
              <td className='p-2 text-right rounded-r text-xs'>
              {
                (typeof item.conf_ind_7d === 'number') ? (
                  <>
                    {
                      'low' === item.confidence_level_7d && <span className='px-3 py-1 rounded-full bg-green-200 text-green-600'>Low</span>
                    }
                     {
                      'high' === item.confidence_level_7d && <span className='px-3 py-1 rounded-full bg-red-200 text-red-600'>High</span>
                    }
                    {
                      !item.confidence_level_7d && '--'
                    }
                  </>
                ) : '--'
              }
              </td>
              
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

function Bluechip() {
    return (
      <div>
        <Head>
          <title>Blue Chips</title>
        </Head>
        <div className='w-full px-8 py-4 space-y-3'>
            <div className='flex flex-row items-center justify-between'>
              <span className='px-2 font-serif text-2xl font-bold'>Top Collections</span>
            </div>

            <ul className="flex flex-wrap text-m font-normal text-center text-gray-500 dark:text-gray-400">
              <li className="mr-2">
                <a href="/" className="inline-block py-2 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white" 
                    aria-current="page">Top Collections</a>
              </li>
              <li className="mr-2">
                <a href="/bluechips" className="shadow-lg inline-block py-2 px-3 text-white bg-cyan-500 shadow-cyan-500/50 rounded-lg active" 
                    aria-current="page">Blue-Chip Collections</a>
              </li>

            </ul>

            <div className='border rounded-md p-2 mt-4 min-h-[20rem]'>
                <DataTable2 />
            </div>
        </div>  
      </div> )
  }
  
export default Bluechip




