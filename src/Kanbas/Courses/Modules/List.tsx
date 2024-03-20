import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    const [moduleList, setModuleList] = useState<any[]>(modules);
    const [module, setModule] = useState({
        name: "New Module",
        description: "New Description",
        course: courseId,
        _id: courseId,
    });
    const addModule = (module: any) => {
        const newModule = {
            ...module,
            _id: new Date().getTime().toString()
        };
        const newModuleList = [newModule, ...moduleList];
        setModuleList(newModuleList);
    };
    const deleteModule = (moduleId: string) => {
        const newModuleList = moduleList.filter(
            (module) => module._id !== moduleId);
        setModuleList(newModuleList);
    };
    const updateModule = () => {
        const newModuleList = moduleList.map((m) => {
            if (m._id === module._id) {
                return module;
            } else {
                return m;
            }
        });
        setModuleList(newModuleList);
    };
    return (
        <>
            <div style={{ textAlign: "right", paddingRight: "10" }}>
                <button>Collapse All</button>
                <button>View Progress</button>
                <select style={{ width: "100px" }}>
                    <option>Publish All</option>
                    <option>Publish All Modules and Items</option>
                    <option>Publish Modules Only</option>
                    <option>Unpublish All</option>
                </select>
                <button className="button-module">+Module</button>
                <hr></hr>
            </div>
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <button onClick={() => { addModule(module) }}>Add</button>
                    <button onClick={updateModule}>
                        Update
                    </button>
                    <input value={module.name}
                        onChange={(e) => setModule({
                            ...module, name: e.target.value
                        })}
                    />
                    <textarea value={module.description}
                        onChange={(e) => setModule({
                            ...module, description: e.target.value
                        })}
                    />
                </li>
                {modulesList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li
                            key={index}
                            className="list-group-item"
                            onClick={() => setSelectedModule(module)}>
                            <button
                                onClick={(event) => { setModule(module); }}>
                                Edit
                            </button>
                            <button
                                onClick={() => deleteModule(module._id)}>
                                Delete
                            </button>
                            <div>
                                <FaEllipsisV className="me-2" />
                                {module.name}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson, index) => (
                                        <li className="list-group-item" key={index}>
                                            <FaEllipsisV className="me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </>
    );
}
export default ModuleList;