import Wrapper from "../../../assets/css/admin/Overview";

const Overview = () => {
  return (
    <Wrapper>
      <article className="right-section">
        <section>
          <h4>Bio</h4>
          <p>
            I love reading books on theoretical physics or attending local
            science fairs and math competitions. Her dream is to pursue a career
            in STEM (Science, Technology, Engineering, and Mathematics) and make
            a meaningful contribution to the world through her love for these
            subjects.
          </p>
        </section>
        <section>
          <h4>Personal Details</h4>
          <div className="personal-details-container">
            <div>
              <h5>Staff ID</h5>
              <p>Janellelevi@gmail.com </p>
            </div>
            <div>
              <h5>Gender</h5>
              <p>Male </p>
            </div>
            <div>
              <h5>Subject</h5>
              <p>English</p>
            </div>
          </div>
        </section>
      </article>
      <article className="left-section">
        <section>
          <h4>Activities</h4>
          <div className="personal-details-container"></div>
        </section>
        <section>
          <h4>Education</h4>
          <div className="personal-details-container"></div>
        </section>
        <section>
          <h4>Skills</h4>
          <div className="personal-details-container"></div>
        </section>
      </article>
    </Wrapper>
  );
};

export default Overview;
