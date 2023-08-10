function match(candidate, job) {
    if(!candidate.minSalary || !job.maxSalary) {
      return error
    } else {
      return candidate.minSalary * 0.9 <= job.maxSalary
    }
  }