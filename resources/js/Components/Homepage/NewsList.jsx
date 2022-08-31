const isNews = (News) => {
    return News.map((data, i) => {
        return (
            <div key={i} className="card  w-full lg:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.tittle}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">
                            {data.category}
                        </div>
                        {/* <div className="badge badge-outline">{data.author }</div> */}
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return <div>saat ini berita belum tersedia</div>;
};

const NewsList = ({ News }) => {
    return !News ? noNews() : isNews(News);
};

export default NewsList;
