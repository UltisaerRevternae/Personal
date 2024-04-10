import React, { useEffect, useState } from "react";
import { imagesStorage } from "functions/localStorage/imagesStorage";
import { getPatron } from "functions/patron/getPatron";

const Images = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dataFromStorage = await imagesStorage();
      setData(dataFromStorage);
    };

    fetchData();
  }, []);

  if (!data || data.length === 0) {
    return <p>Cargando datos...</p>;
  }

  const patron = getPatron(data.length)

  const css = `
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-rows: 250px;
      grid-auto-flow: dense;
      justify-content: center;
      font-size: 12px;
      gap: 12px;
      section {
        width: 100%;
      }
    }
    section {
      width: 224px;
      border-radius: 8px;
      position: relative;
      overflow: hidden;
    }
    section::before {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(0deg, var(--background-color) 0%, transparent 40%);
      width: 100%;
      height: 100%;
    }
    .tags {
      position: absolute;
      bottom: 10px;
      left: 10px;
      right: 10px;
      /* overflow-x: scroll;
      scroll-snap-type: x mandatory;
      scrollbar-width: thin;
      scroll-behavior: smooth;
      scrollbar-color: var(--soft-color) transparent; */
      display: flex;
      gap: 8px;
      justify-content: end;
      span {
        background-color: var(--primary-color);
        color: var(--secundary-color);
        font-weight: var(--font-weight-bold);
        border-radius: 4px;
        padding: 2px 4px;
      }
    }
    .images {
      height: 100%;
      width: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      p {
        z-index: 3;
        position: absolute;
        left: 10px;
        right: 10px;
        bottom: 40px;
      }
    }

    .big { 
      grid-row: span 2;
      grid-column: span 2;
    }
  
    .tall { 
      grid-row: span 2;
    }
    
    .wide { 
      grid-column: span 2;
    }

    @media screen and (max-width: 760px) {
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr ;
      }
      section.normal_mobile {
        grid-row: span 1;
        grid-column: span 1;
      }
      section.wide_mobile {
        grid-column: span 2;
        grid-row: span 1;
      }
      section.tall_mobile {
        grid-row: span 2;
        grid-column: span 1;
      }
    }

  @media screen and (max-width: 430px) {
    .container {
      grid-template-columns: 1fr ;
      gap: 0;
      row-gap: 12px;
    }
  }
  `

  return (
    <>
      <style>{css}</style>
      <div className="container">
        {data.map((element, index) => (
          <section className={patron[index]} key={index}>
            <div className="images">
              <img src={element.url} alt={element.img} />
              <p>{element.metadata.substring(16, 80).trim() + ' ...'}</p>
            </div>
            <div className="tags">
              {element.tags.map((value, index) => {
                if (index < 3) return <span key={index}>{value}</span>
              })}
            </div>
          </section>
          
        ))}
      </div>
    </>
  );
};

export default Images;
