import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import EthIcon from '../components/EthIcon'
import LoadingIcon from '../components/LoadingIcon'
import SortIcon from '../components/SortIcon'
import Link from 'next/link'
import { Tab } from '@headlessui/react'



type Collection = {
  collection: string,
  daily_volume: number,
  logo: string,
  risk_factor?: number,
  sudo_arbitrage_profit?: number,
  opensea_floor_price?: number,
  sudo_offer?: number,
  confidence_index?: number,
  confidence_level?: string,
  link: string,
  time?: string
}

type Sort = {
  key: keyof Collection,
  value: number,
}

let initData: Collection[] = []

const DataTable = ({setTime}) => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Collection[]>([])
  const [sort, setSort] = useState<Sort | undefined>(undefined)

  useEffect(() => {
    fetch('/api/database').then(resp => resp.json()).then(data => {
      initData = data
      setData(data)
      data.forEach(element => {
        if (element.time){
          return setTime(element.time);
        }
      })
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (sort) {
      if (sort.value === 0) {
        setData(initData)
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

  const changeSort = (key: keyof Collection) => {
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

    <table className="table-fixed w-full text-sm">
      <thead>
        <tr className='text-left text-slate-500 uppercase text-xs font-normal'>
          <th className='p-2'>Collection</th>
          <th className='p-2 text-right w-30'>
            <div className='flex flex-row items-center gap-1 justify-end'>
              Daily Volume
              <SortIcon className='w-3 h-3 cursor-pointer' sortValue={sort && sort.key === 'daily_volume' ? sort.value : 0} onClick={() => changeSort('daily_volume')} />
            </div>
          </th>
          <th className='p-2 text-right w-30'>
            <div className='flex flex-row items-center gap-1 justify-end'>
              Risk Factor
              <SortIcon className='w-3 h-3 cursor-pointer' sortValue={sort && sort.key === 'risk_factor' ? sort.value : 0} onClick={() => changeSort('risk_factor')} />
            </div>
          </th>
          <th className='p-2 text-right w-48'>
            <div className='flex flex-row items-center gap-1 justify-end'>
              Sudo Arbitrage Profit
              <SortIcon className='w-3 h-3 cursor-pointer' sortValue={sort && sort.key === 'sudo_arbitrage_profit' ? sort.value : 0} onClick={() => changeSort('sudo_arbitrage_profit')} />
            </div>
          </th>
          <th className='p-2 text-right w-48'>
            <div className='flex flex-row items-center gap-1 justify-end'>
              OpenSea Floor Price
              <SortIcon className='w-3 h-3 cursor-pointer' sortValue={sort && sort.key === 'opensea_floor_price' ? sort.value : 0} onClick={() => changeSort('opensea_floor_price')} />
            </div>
          </th>
          <th className='p-2 text-right w-28'>Sudo Offer</th>
          <th className='p-2 text-right w-30'>
            <div className='flex flex-row items-center gap-1 justify-end'>
              Confidence Index
              <SortIcon className='w-3 h-3 cursor-pointer' sortValue={sort && sort.key === 'confidence_index' ? sort.value : 0} onClick={() => changeSort('confidence_index')} />
            </div>
          </th>
          <th className='p-2 text-right w-30'>Confidence Level</th>
        </tr>
      </thead>

      <tbody>
        {
          data.map((item: Collection) => (
            <tr className='hover:bg-gray-100 cursor-pointer rounded overflow-hidden' key={item.collection}>
              <td className='p-2 truncate rounded-l'>
                <div className='flex flex-row items-center gap-2' onClick={() => { window.open(item.link,'_blank')}}>
                  <img src={item.logo} alt="" className='w-8 h-8 rounded-full bg-gray-200' />
                  <span className='font-medium'>{item.collection}</span>
                </div>
              </td>
              <td className='py-2 px-6 text-right'>
                <div className='flex flex-row items-center gap-1 justify-end'>
                  <EthIcon className='w-3.5 h-3.5' />
                  <span>{item.daily_volume}</span>
                </div>
              </td>
              <td className='py-2 px-6 text-right'>
                {
                  item.risk_factor ? item.risk_factor.toFixed(2) : item.risk_factor === 0 ? '0.00' : '--'
                }
              </td>
              <td className='py-2 px-6 text-right'>
                {
                  (item.sudo_offer && typeof item.sudo_arbitrage_profit === 'number') ? (
                    <>
                      {
                        item.sudo_arbitrage_profit < 0 && <span className='text-red-500'>{item.sudo_arbitrage_profit.toFixed(2)}</span>
                      }
                       {
                        item.sudo_arbitrage_profit === 0 && <span>{item.sudo_arbitrage_profit.toFixed(2)}</span>
                      }
                      {
                        item.sudo_arbitrage_profit > 0 && <span className='text-green-500'>+{item.sudo_arbitrage_profit.toFixed(2)}</span>
                      }
                    </>
                  ) : '--'
                }
                </td>
              <td className='py-2 px-6 text-right'>
                <div className='flex flex-row items-center gap-1 justify-end'>
                  <EthIcon className='w-3.5 h-3.5' />
                  <span>{item.opensea_floor_price && item.opensea_floor_price.toFixed(2)}</span>
                </div>
              </td>
              <td className='p-2 text-right'>
                {
                  item.sudo_offer ? (
                    <div className='flex flex-row items-center gap-1 justify-end'>
                      <EthIcon className='w-3.5 h-3.5' />
                      <span>{item.sudo_offer.toFixed(2)}</span>
                    </div>
                  ) : '--'
                }
              </td>
              <td className='p-2 text-right'>
                
                {typeof item.confidence_index === 'number' ? 
                  <div className="w-30 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-gradient-to-r from-purple-500/70 to-pink-500/70 h-2.5 rounded-full" style={{width:item.confidence_index}}></div>
                  </div>   
                   : '--'
                }
              </td>
              <td className='p-2 text-right rounded-r text-xs'>
                {
                  'low' === item.confidence_level && <span className='px-3 py-1 rounded-full bg-green-200 text-green-600'>Low</span>
                }
                {
                  'high' === item.confidence_level && <span className='px-3 py-1 rounded-full bg-red-200 text-red-600'>High</span>
                }
                {
                  !item.confidence_level && '--'
                }
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

type Bluechips = {
  nickname: string,
  collection: string,
  logo: string,
  link: string,
  floor: number,
  volume_1d: number,
  change_1d : number,
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
  const [progress, setPro] = useState("")


  useEffect(() => {
    fetch('/api/bluechips').then(resp => resp.json()).then(data => {
      initData2 = data
      setData(data)
      setPro(data.conf_ind_24h)
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

  <table className="table-fixed w-full text-sm">
    <thead>
      <tr className='text-left text-slate-500 uppercase text-xs font-normal'>
        <th className='p-2'>Collection</th>
        <th className='p-2 text-right w-35'>
            <div className='flex flex-row items-center gap-1 justify-end'>
              Floor Price
              <SortIcon className='w-3 h-3 cursor-pointer' sortValue={sort && sort.key === 'floor' ? sort.value : 0} onClick={() => changeSort2('floor')} />
            </div>
        </th>
        <th className='p-2 text-right w-35'>
            <div className='flex flex-row items-center gap-1 justify-end'>
              24h Volume
              <SortIcon className='w-3 h-3 cursor-pointer' sortValue={sort && sort.key === 'volume_1d' ? sort.value : 0} onClick={() => changeSort2('volume_1d')} />
            </div>
        </th>
        <th className='p-2 text-right w-30'>
            <div className='flex flex-row items-center gap-1 justify-end'>
              %Change
              <SortIcon className='w-3 h-3 cursor-pointer' sortValue={sort && sort.key === 'change_1d' ? sort.value : 0} onClick={() => changeSort2('change_1d')} />
            </div>
        </th>
        
        <th className='p-2 text-right w-48'>
          <div className='flex flex-row items-center gap-1 justify-end'>
            24h Confidence Index
            <SortIcon className='w-3 h-3 cursor-pointer' sortValue={sort && sort.key === 'conf_ind_24h' ? sort.value : 0} onClick={() => changeSort2('conf_ind_24h')} />
          </div>
        </th>
        <th className='p-2 text-right w-48'>
          <div className='flex flex-row items-center gap-1 justify-end'>
            24h Confidence Level
          </div>
        </th>
        <th className='p-2 text-right w-48'>
          <div className='flex flex-row items-center gap-1 justify-end'>
            7d Confidence Index
            <SortIcon className='w-3 h-3 cursor-pointer' sortValue={sort && sort.key === 'conf_ind_7d' ? sort.value : 0} onClick={() => changeSort2('conf_ind_7d')} />
          </div>
        </th>
        <th className='p-2 text-right w-48'>
          <div className='flex flex-row items-center gap-1 justify-end'>
            7d Confidence Level
          </div>
        </th>
      </tr>
    </thead>

    <tbody>
      {
        data.map((item: Bluechips) => (
          <tr className='hover:bg-gray-100 cursor-pointer rounded overflow-hidden' key={item.collection}>
            <td className='p-2 truncate rounded-l'>
              <div className='flex flex-row items-center gap-2' onClick={() => { window.open(item.link,'_blank')}}>
                <img src={item.logo} alt="" className='w-8 h-8 rounded-full bg-gray-200' />
                <span className='font-medium'>{item.collection}</span>
              </div>
            </td>
            <td className='py-2 px-6 text-right'>
              <div className='flex flex-row items-center gap-1 justify-end'>
                <EthIcon className='w-3.5 h-3.5' />
                <span>{
                  item.floor  ? item.floor.toFixed(2) : item.floor === 0 ? '0.00' : '--'
                }
                </span>
              </div>
            </td>
            <td className='py-2 px-6 text-right'>
                <div className='flex flex-row items-center gap-1 justify-end'>
                  <EthIcon className='w-3.5 h-3.5' />
                  <span>{item.volume_1d && item.volume_1d.toFixed(1)}</span>
                </div>
            </td>
            <td className='py-2 px-6 text-right'>
                {
                  (typeof item.change_1d === 'number') ? (
                    <>
                      {
                        item.change_1d < 0 && <span className='text-red-500'>{(item.change_1d * 100).toFixed(2)+ '%'}</span>
                      }
                       {
                        item.change_1d === 0 && <span>--</span>
                      }
                      {
                        item.change_1d > 0 && <span className='text-green-500'>+{(item.change_1d * 100).toFixed(2)+ '%'}</span>
                      }

                    </>
                  ) : '--'
                }
                </td>
            <td className='py-2 px-6 text-right'>
              {item.conf_ind_24h === 0 ? '--' : 
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-gradient-to-r from-purple-500/70 to-pink-500/70 h-2.5 rounded-full" style={{width:item.conf_ind_24h}}></div>
                </div>    
              }
            
              {/* <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-gradient-to-r from-purple-500/70 to-pink-500/70 h-2.5 rounded-full" style={{width:item.conf_ind_24h}}></div>
              </div>         */}
            </td>
          
            <td className='p-2 text-right rounded-r text-xs'>
            {
              (typeof item.conf_ind_24h === 'number') ? (
                <>
                  {
                    'low' === item.confidence_level_24h && <span className='px-3 py-1 rounded-full bg-green-200 text-green-600'>Low</span>
                  }
                   {
                    '--' === item.confidence_level_24h && <span>--</span>
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

            <td className='py-2 px-6 text-right'>
              {item.conf_ind_7d === 0 ? '--' : 
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-gradient-to-r from-purple-500/70 to-pink-500/70 h-2.5 rounded-full" style={{width:item.conf_ind_7d}}></div>
                </div>    
              }
              
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


const BeforeAccess = () => {

  const connect = useMetamask()

  return (
    <div className='text-center inline-block'>
      <img src="https://cryptologos.cc/logos/versions/ethereum-eth-logo-animated.gif?v=023" alt="" className='w-32 h-32 mx-auto' />
      <div className='flex flex-row items-center gap-4 mt-12'>
        <button className='bg-blue-500 px-12 py-2 rounded-md text-white font-medium hover:bg-blue-600' onClick={connect}>Connect Wallet</button>
      </div>
    </div>
  )

}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Home: NextPage = () => {
  const address = useAddress()
  const disconnect = useDisconnect()
  let [categories] = useState({'Top Collections':[], 'Blue-Chip Collections':[]})
  const [time, setTime] = useState("")


  return (
    <div>
      <Head>
        <title>Top Collections</title>
      </Head>
      
      {
        address ? (
          <div className='w-full px-8 py-4 space-y-1'>
            <div className='flex flex-row items-center justify-between'>
              <span className='px-2 font-serif text-2xl font-bold'>Top Collections</span>

              <div className='flex flex-row items-center'>

                <span className='bg-gray-200 py-2 px-4 rounded-md text-gray-700'>Address: {address}</span>
                <button className='bg-red-500 px-4 py-2 rounded-md text-white font-medium hover:bg-red-600' onClick={disconnect}>Disconnect</button>
              </div>
            </div>
            <div className='absolute top-20 right-20 w-72 font-serif text-medium font-medium italic bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-sky-500'>Last Updated Time: {time}</div>
            {/* <div className='absolute top-20 right-20 w-72 font-serif text-medium font-medium italic text-rose-400/70'>Last Updated Time: {time}</div> */}

            <div className="w-full px-8 py-4 space-y-1">
                
                <Tab.Group>
                  <Tab.List className="flex flex-wrap text-m font-normal text-center text-gray-500 dark:text-gray-400">
                    {Object.keys(categories).map((category) => (
                      <Tab
                        key={category}
                        className={({ selected }) =>
                            classNames(
                            'mr-2',
                            // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                              selected
                                ? 'outline-none shadow-lg inline-block py-1.5 px-3 text-white bg-cyan-500 shadow-cyan-500/30 rounded-lg active'
                                : 'outline-none inline-block py-1.5 px-4 rounded-lg hover:text-gray-900 hover:bg-cyan-500/10 dark:hover:bg-gray-800 dark:hover:text-white'
                            )
                        }
                      >
                        {category}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                        <div className='border rounded-md p-2 mt-4 min-h-[20rem]'>
                            <DataTable setTime={setTime}/>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className='border rounded-md p-2 mt-4 min-h-[20rem]'>
                            <DataTable2 />
                        </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
          </div>
        ) : (
          <div className='h-screen w-full flex flex-col justify-center items-center'>
            <BeforeAccess />
            <div className='h-[20vh] w-full'></div>
          </div>
        )
      }
      
    </div >
  )
}
export default Home
