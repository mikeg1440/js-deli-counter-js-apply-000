


function takeANumber(deliLine, name) {
  
  return `Welcome, ${name}.\n  You are number ${deliLine.length+1} in line.`
}


function nowServing(deliLine) {
  
  var nextUp
  
  if (deliLine.length > 0) {
    nextUp = deliLine.shift()
  } else {
    nextUp = "There is nobody waiting to be served!"
  }
  
  return nextUp
  
}

