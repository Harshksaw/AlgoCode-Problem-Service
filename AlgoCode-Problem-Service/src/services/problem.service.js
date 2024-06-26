const sanitizeMarkdown = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }
  async createProblem(problemData) {

      //1. Sanitize the markdown content
      problemData.description = sanitizeMarkdown(problemData.description);

      const problem = this.problemRepository.createProblem(problemData);

      return problem;

  }


  async getAllProblems() {

      const problems = await this.problemRepository.getAllProblems();
      return problems;
  
  }

  async getProblem(problemId){
    const problem = await this.problemRepository.getProblemById(problemId);
    return problem;
  }


    async deleteProblem(problemId) {
        const problem = await this.problemRepository.deleteProblem(problemId);
        return problem;
    }

}

module.exports = ProblemService;
