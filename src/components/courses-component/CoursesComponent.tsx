import {coursesAndDurationArray} from "../../CouursesArray/array.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";
import type {CourseModel} from "../../models/CourseModel.ts";

export const CoursesComponent = () => {
    return (
        <ul>
            {
                coursesAndDurationArray.map((course: CourseModel, index: number) => {
                    return <CourseComponent someCourse={course} key={index}/>;
                })
            }
        </ul>
    );
};
