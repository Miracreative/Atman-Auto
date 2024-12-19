
import axios from 'axios';
import NewsTitle from '@/components/newsPage/SingleNews/NewsTitle/NewsTitle.jsx';
import NewsSliderAndContent from '@/components/newsPage/SingleNews/NewsSliderAndContent/NewsSliderAndContent.jsx';


const NewsPage = async({params}) => {


	// const [news, setNews] = useState([]);
	// const [error, setError] = useState(null);
	// const [loading, setLoading] = useState(true);



	// const params = useParams();
	const id = await params.id;
	const res = await fetch(`${process.env.HOST}/api/news/${id}`);
	const news = await res.json();
    console.log("news", news);

	// useEffect(() => {
	// 	const fetchNews = async () => {
	// 		try {
	// 			const response = await axios.get(`${process.env.HOST}/api/news/${id}`);
	// 			setNews(response.data);
	// 		} catch (err) {
	// 			setError(err.message || 'Неизвестная ошибка');
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	};

	// 	fetchNews();
	// }, [id]);





	const title = news.title;
	const descr = news.descr;
	const content = news.content;
	const imagessrc = news.imagessrc;

	// console.log(imagessrc);

	// if (loading) {
	// 	<>
	// 		<div>21421422</div>
	// 	</>
	// }



	return (
		<>
			{/* <NewsTitle title={title} descr={descr} ></NewsTitle>

			<NewsSliderAndContent imagessrc={imagessrc} content={content} ></NewsSliderAndContent> */}

{/* 
			{loading ? (
				<div></div>
			) : ( */}
			{ news && 	<>
					<NewsTitle title={title} descr={descr} />
					<NewsSliderAndContent imagessrc={imagessrc} content={content} />
				</>}
			{/* )} */}
		</>
	);
};

export default NewsPage;