import "./qualifications.css";

const Qualifications = () => {
    return (
        <div>
            <span className="quali-text">My Experience as a Developer</span>
            <div className="qualifications-container">
                <div className="qualification">
                    <div className="content html">
                        <h3 style={{textAlign: "center"}}>
                            09.2021-CURRENT
                        </h3>
                        <br/>
                        <h4 style={{textAlign: "center"}}>
                            Front-End Developer
                        </h4>
                        <br/>
                        <p style={{textAlign: "center"}}>
                            As a part of the team who has to develop next-generation cash registers for fuel stations;
                            I developed all administrative screens for the cash register's maintenance. Those pages
                            have dynamic tables, data manipulations, and role-based user authentication systems with
                            jwt tokens.
                        </p>
                    </div>
                    <h1>MEPSAN</h1>
                </div>
                <div className="qualification">
                    <div className="content css">
                        <h3 style={{textAlign: "center"}}>
                            09.2020-02.2021
                        </h3>
                        <br/>
                        <h4 style={{textAlign: "center"}}>
                            Electrical Engineer
                        </h4>
                        <br/>
                        <p style={{textAlign: "center"}}>
                            I was responsible for the maintenance and supervision of high-power transformers of
                            large-scale industrial plants, monitoring, and regulation of reactive power consumption. And
                            I marketed to customers of all of these operations as a sales engineer.
                        </p>
                    </div>
                    <h1>ELKOM</h1>
                </div>
                <div className="qualification">
                    <div className="content javascript">
                        <h3 style={{textAlign: "center"}}>
                            08.2019-09.2019
                        </h3>
                        <br/>
                        <h4 style={{textAlign: "center"}}>
                            Electrical Engineer
                        </h4>
                        <br/>
                        <p style={{textAlign: "center"}}>
                            As a intern Engineer; person in charge for maintenance, repair and revision works and l
                            coordinator between
                            departments.Technical items purchasing intern.
                        </p>
                    </div>
                    <h1>MUTLU SUGAR C.o.</h1>
                </div>
                <div className="qualification">
                    <div className="content bootstrap">
                        <h3 style={{textAlign: "center"}}>
                            09.2015-02.2021
                        </h3>
                        <br/>
                        <h4 style={{textAlign: "center"}}>
                            Electrical & Electronics Engineering Student
                        </h4>
                        <br/>
                        <p style={{textAlign: "center"}}>
                            With preparatory class; I get a good command of English. Throughout my education, I
                            constantly improved myself and bring friends from different cultures and sectors.
                        </p>
                    </div>
                    <h1>CELAL BAYAR ÜNİVERSİTESİ</h1>
                </div>
            </div>
        </div>
    );
};

export default Qualifications;
