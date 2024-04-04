"use client"
import React, { ReactElement } from 'react'
import styles from './search.module.css'
import { MdSearch } from 'react-icons/md'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if(e.target.value){
      e.target.value.length > 2 && params.set("q", e.target.value);

    }else{
      params.delete("q");
    }
    replace(`${pathname}?${params}`)
  }, 400);

  return (
    <div className={styles.container}>
        <MdSearch />
          <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch}/>
    </div>
  )
}

export default Search
