export default function createIteratorObject(report) {
    const array = [];
    for (const emp of Object.values(report.allEmployees)) {
      array.push(...emp);
    }
  
    return array.join(' | ');
  }