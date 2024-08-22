'use client'

import styles from "./page.module.css";
import { useState, useEffect } from "react";


const URL_API = "https://jsonplaceholder.typicode.com/todos/1";

export default function Home() {

  const [load, setLoading] = useState(false)
  const fetchAllData = async () => {
    try {
      setLoading(true)
      const response = await fetch(URL_API)

      console.log(response)

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchAllData()
  }, [])

  return (
    <div className={styles.description}>
      <p>Requisição em uma api com nextJS</p>
    </div>
  );
}
