import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { projectServices } from "./project.service";

const insertProject = catchAsync(async (req, res) => {
    // console.log(req.body.data);
    // console.log(req.file);
    const result = await projectServices.insertProjectIntoDB({
        ...JSON.parse(req?.body?.data),
        image: req.file?.path,
    });
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Project inserted successfully",
        data: result,
    });
});

const getAllProjects = catchAsync(async (req, res) => {
    const result = await projectServices.getAllProjectsFromDB();
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Projects retrieved successfully",
        data: result,
    });
});

const getSingleProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    // console.log(id, 'from controller')
    // console.log(req.params, 'from controller')
    const result = await projectServices.getSingleProjectFromDB(id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Project retrieved successfully",
        data: result,
    });
});

const updateProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await projectServices.updateProjectIntoDB(id, req);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Project updated successfully",
        data: result,
    });
});

const deleteProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await projectServices.deleteProjectFromDB(id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Project deleted successfully",
        data: result,
    });
});


export const projectControllers = {
    insertProject,
    getAllProjects,
    getSingleProject,
    updateProject,
    deleteProject,
}