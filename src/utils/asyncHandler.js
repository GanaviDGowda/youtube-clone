const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err));
    }
}

export { asyncHandler };




//cont asyncHandler=()=>{}
//const asyncHandler=(fun)=>{()=>{}}
//const asyncHandler = (fun) => async() => {}

//asyncHandler takes a function fn as a parameter and returns an anonymous async function that takes (req, res, next) as its parameters.

// The async function calls the fn function with the req, res, and next parameters.

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req,res,next)
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
