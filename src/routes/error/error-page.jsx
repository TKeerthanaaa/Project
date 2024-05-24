import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img
        className="w-[100%] h-[85vh]"
        src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
        alt="error"
      />
      <button className="px-4 py-2 bg-cyan-900 text-white font-medium">
        <a href="/">Go To Home Page</a>
      </button>
    </div>
  );
}
