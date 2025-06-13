import { ICourse } from "@/interFace/interFace";

interface ICourseProps {
    adbox: ICourse;
}

const AdBoxCard = ({ adbox }: ICourseProps) => {
    return (
        <div className="bd-course-wrapper">
            <div className="bd-add-box">
                <div className="bd-add-box-top">
                    <h4 className="bd-add-box-title">{adbox.title}</h4>
                    <p className="bd-add-box-desc">{adbox.courseDescription}</p>
                </div>
                <div className="bd-add-box-bottom">
                    <div className="bd-add-box-brand">
                        
                    </div>
                    <div className="bd-add-box-btn">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AdBoxCard;  