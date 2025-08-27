import type {ICourse} from "../../models/ICourse.ts";

interface CourseComponentProps {
    course: ICourse
}


export const CourseComponent = ({course}: CourseComponentProps) => {
    return (
        <li className={'my-10 ml-5 bg-fuchsia-700 w-xl pt-5 pb-5 pl-2.5'}>
            Title: {course.title}
            <br/>
            Duration: {course.monthDuration} months and {course.hourDuration} hours
            <br/>
            Modules: {course.modules.join(', ')}
        </li>
    );
};
