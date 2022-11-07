import "./members.css";

const Members = () => {
    return (
        <div id="members" className="container members-container">
            <h1 className="member-txt">References</h1>
            <div className="member member-1">
                <div className="member-img"></div>
                <div className="member-info">
                    <h1 className="name">Doğan Berk YELKENCİ</h1>
                    <h3 className="position">Front-End Developer</h3>
                    <h4 className="about">
                        Extremely passionate and motivated software developer in field. Analytical and detail oriented,
                        creative and adaptive. Currently working on payment system for new generation cash register
                        project
                    </h4>
                    <a href="mailto:d.berkyelkenci@gmail.com" className="contact-member">
                        <span>contact</span>
                    </a>
                </div>
            </div>

            <div className="member member-2">
                <div className="member-img2"></div>
                <div className="member-info">
                    <h1 className="name">Oğulcan YAĞIZ</h1>
                    <h3 className="position">Software Developer</h3>
                    <h4 className="about">
                        Structured several custom REST APIs built in Python which comprise manipulating and
                        transferring the data for the TSM project.
                        Worked on designing horizontally scalable non-relational database using Sharded Cluster
                        property which consists of Sharding & Replication components of MongoDB.
                        Deployed services on Linux and virtualized environments using Docker. Besides,
                        orchestrated those services using Kubernetes.
                        Expert on HSM in order to perform data transfer safely.
                    </h4>

                    <a href="mailto:ogulcanyagiz17@gmail.com" className="contact-member">
                        <span>contact</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Members;
