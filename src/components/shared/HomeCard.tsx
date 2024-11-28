import { plaza } from "@/constants";
import YoutubeEmbed from "./YoutubeEmbed";

type HomeCardProps = {
  post: {
    id: number;
    name?: string;
    description?: string;
    address?: string;
    video?: string;
  };
};

const map = (
  <section>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.591667072147!2d-117.97398558902374!3d33.74537353376062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd27caaed9d6b5%3A0x7a376b81b136db84!2s9039%20Bolsa%20Ave%2C%20Westminster%2C%20CA%2092683!5e0!3m2!1sen!2sus!4v1728016801314!5m2!1sen!2sus"
      width="600"
      height="450"
      loading="lazy"
      className="w-full  p-2 rounded-2xl"
    ></iframe>
  </section>
);

const HomeCard = ({ post }: HomeCardProps) => {
  console.log(post);
  return (
    <div className="post-card">
      {post.description ? (
        <p className="p-3 text-center">{plaza.description}</p>
      ) : null}
      {post.name ? (
        <div className=" p-3 text-center">
          {plaza.leasing ? (
            <div className="flex flex-col gap-3 text-center">
              <p className="">Available for lease</p>
              <p>{plaza.leasingDetail}</p>
              <div>
                <p>
                  Please contact <br />
                  Loan (Jennifer) : {plaza.phone1} <br />
                  An (John) : {plaza.phone2} <br />
                  Robert : rdao2893@gmail.com
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2 text-center">
              <p className="">No available spaces for lease</p>
              <div className="">
                <p>
                  Please contact <br />
                  Loan (Jennifer) : {plaza.phone1} <br />
                  An (John) : {plaza.phone2} <br />
                  Robert : rdao2893@gmail.com
                </p>
              </div>
              <p>
                And we will update you on availabilities in the future or for
                other locations
              </p>
            </div>
          )}
        </div>
      ) : null}
      {post.address ? (
        <>
          <p className="text-center text-xl">{post.address}</p>
          {map}
        </>
      ) : null}
      {post.video ? <YoutubeEmbed /> : null}
    </div>
  );
};

export default HomeCard;
