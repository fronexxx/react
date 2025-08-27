import {coursesArray} from "../../coursesArray/coursesArray.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";
import type {ICourse} from "../../models/ICourse.ts";

export const CoursesComponent = () => {
    return (
            <ul>
                {
                    coursesArray.map((someCourse: ICourse, index: number) => {
                        return <CourseComponent course={someCourse} key={index}/>
                    })
                }
            </ul>

    );
};
