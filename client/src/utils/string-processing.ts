export function processQuestionMessage(questionMessage:string) {
    const regex = /Menu:\s+(.+?)\nDescription:\s+(.+?)\nCooking\sdirection:\s((?:\s+\d+:\s(.+?)\n?)+)\s+Image:\s(.+?)$/g;
    const matches = regex.exec(questionMessage);
  
    if (!matches) {
      throw new Error('Invalid question message format');
    }
  
    const menus = [];
    const menuName = matches[1];
    const description = matches[2];
    const cookingDirections = matches[3].trim().split('\n').map(direction => direction.replace(/^\s+\d+:\s/, ''));
    const image = matches[4];
  
    menus.push({
      "MenuName": menuName,
      "Description": description,
      "CookingInstruction": cookingDirections,
      "Image": image
    });
  
    return menus;
  }