type CodeCardProps = {
  post: {
    id: string;
    name: string;
    code: string;
  };
};

const CodeCard = ({ post }: CodeCardProps) => {
  return (
    <div className="post-card m-3">
      <div className="">
        <div className=" p-3">
          <p className="text-xl">{post.name}</p>
          <p className="text-blue-700 my-1">{post.code}</p>
        </div>
      </div>
    </div>
  );
};

export default CodeCard;
