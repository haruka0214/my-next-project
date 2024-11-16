import Image from "next/image";

import styles from "./index.module.css";

type News={
    id:string;
    title:string;
    category:{
        name:string;
    };
    publishedAt:string;
    createdAt:string;
}

type Props = {
    news:News[];
};

export default function NewsList({ news }: Props) {
    if (news.length === 0) {
        return <div>記事がありません</div>;
    }   
    return (
        <ul>
            {news.map((article) => (
                <li key={article.id}> className={styles.list}>
                  <div classname={styles.link}>>
                    
                    
    );
}
