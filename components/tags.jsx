export default function Tags({ tags, style, style1 }) {
  return (
    <>
      {tags && tags.length > 0 && (
        <ul className={`flex mt-1 flex-wrap ${style1}`}>
          {tags.map((tag, index) => (
            <li
              key={index}
              className={`text-gray-600 text-sm border border-transparent hover:border-gray-300 py-1 px-2 rounded-lg hover:bg-gray-100 ${style}`}
            >
              #{tag}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
