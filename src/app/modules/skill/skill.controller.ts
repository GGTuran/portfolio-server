import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { skillServices } from "./skill.service";



const addSkill = catchAsync(async (req, res) => {

    const result = await skillServices.AddSkillIntoDB(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Skill added successfully",
        data: result,
    });
});

const getAllSkills = catchAsync(async (req, res) => {
    const result = await skillServices.getAllSkillsFromDB();
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Skills retrieved successfully",
        data: result,
    });
});

const getSingleSkill = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await skillServices.getSingleSkillFromDB(id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Skill retrieved successfully",
        data: result,
    });
});

const updateSkill = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await skillServices.updateSkillIntoDB(id, req);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Skill updated successfully",
        data: result,
    });
});

const deleteSkill = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await skillServices.deleteSkillFromDB(id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Skill deleted successfully",
        data: result,
    });
});


export const skillControllers = {
    addSkill,
    getAllSkills,
    getSingleSkill,
    updateSkill,
    deleteSkill,
}