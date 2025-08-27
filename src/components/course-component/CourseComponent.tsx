import './CourseComponent.css'
import type {CourseModel} from "../../models/CourseModel.ts";
import type {FC} from "react";

type PropsType = {
    someCourse: CourseModel
}
export const CourseComponent: FC<PropsType> = ({someCourse}) => {
    return (
        <li>
            {someCourse.title} {someCourse.monthDuration}
        </li>
    );
};
