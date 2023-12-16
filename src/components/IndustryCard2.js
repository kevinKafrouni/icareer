import { Link } from "react-router-dom";

function IndustryCard2(props) {
    const imageUrl = props.image;
  
    return (
      <Link to={`/specializations/${props.title}`}>
      <div className="max-w-sm h-64 w-64 relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div
          className="absolute inset-0 bg-black opacity-50 rounded-lg bg-cover"
          style={{ backgroundImage: `url('${imageUrl}')`}}
        />
        <div className="p-5 relative z-10">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-900 dark:text-white">{props.description}</p>
        </div>
      </div>
      </Link>
    );
  }
  
  export default IndustryCard2;
  