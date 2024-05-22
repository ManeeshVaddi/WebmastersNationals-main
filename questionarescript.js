function nextQuestion(currentQuestionId, nextQuestionId) {
    const currentQuestion = document.getElementById(currentQuestionId);
    const selectedOption = currentQuestion.querySelector('input[type="radio"]:checked');

    if (selectedOption) {
        currentQuestion.classList.remove('active');
        document.getElementById(nextQuestionId).classList.add('active');
    } else {
        alert('Please select an option before proceeding.');
    }
}

function resetQuiz() {
    // Reset all radio button selections
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(button => {
        button.checked = false;
    });

    // Show the first question again
    document.querySelectorAll('.question').forEach(question => {
        question.classList.remove('active');
    });
    document.getElementById('question1').classList.add('active');

    // Clear the result message
    document.getElementById('result').innerHTML = '';

    // Don't hide reset button
    // document.getElementById('resetButton').style.display = 'none';
}


function calculateGreenResource() {
    const locationClimate = document.querySelector('input[name="locationClimate"]:checked');
    const energyConsumption = document.querySelector('input[name="energyConsumption"]:checked');
    const budget = document.querySelector('input[name="budget"]:checked');
    const suitableSpace = document.querySelector('input[name="suitableSpace"]:checked');

    let greenResource = '';

    if (locationClimate && energyConsumption && budget && suitableSpace) {
        if (locationClimate.value === 'urban') {
            if (energyConsumption.value === 'low') {
                if (budget.value === 'low') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'LED lighting upgrades';
                    } else {
                        greenResource = 'Energy-efficient appliances';
                    }
                } else if (budget.value === 'moderate') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Solar water heating system';
                    } else {
                        greenResource = 'Programmable thermostat';
                    }
                } else {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Rooftop solar panels';
                    } else {
                        greenResource = 'Energy-efficient windows';
                    }
                }
            } else if (energyConsumption.value === 'moderate') {
                if (budget.value === 'low') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Energy Efficient HVAC System';
                    } else {
                        greenResource = 'Smart Power Strips';
                    }
                } else if (budget.value === 'moderate') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Wind turbine installation';
                    } else {
                        greenResource = 'Energy audit and insulation improvements';
                    }
                } else {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Residential battery storage system';
                    } else {
                        greenResource = 'Electric Vehicle';
                    }
                } 
            } else if (energyConsumption.value === "high") {
                if (budget.value === 'low') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Rainwater Harvesting System';
                    } else {
                        greenResource = 'Energy Efficient Water-Heater';
                    }
                } else if (budget.value === 'moderate') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Geothermal heating and cooling system';
                    } else {
                        greenResource = 'Home Energy Monitor';
                    }
                } else {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Energy-efficient home design (passive solar, etc.);                        ';
                    } else {
                        greenResource = 'Heat pump water heater';
                    }}}
        } else if (locationClimate.value === 'suburban') {
            if (energyConsumption.value === 'low') {
                if (budget.value === 'low') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Community Solar Subscription';
                    } else {
                        greenResource = 'Energy Efficient Landscaping';
                    }
                } else if (budget.value === 'moderate') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Electric Vehicle Lease';
                    } else {
                        greenResource = 'Smart Irrigation System';
                    }
                } else {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Green Roof Installation';
                    } else {
                        greenResource = 'Home battery back-up system';
                    }
                }
            } else if (energyConsumption.value === 'moderate') {
                if (budget.value === 'low') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Energy-efficient pool pump';
                    } else {
                        greenResource = 'Solar attic fan';
                    }
                } else if (budget.value === 'moderate') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Residential wind turbine';
                    } else {
                        greenResource = 'Energy-efficient garage door';
                    }
                } else {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Microgrid installation';
                    } else {
                        greenResource = 'Electric vehicle (EV) purchase';
                    }
                } 
            } else if (energyConsumption.value === "high") {
                if (budget.value === 'low') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Solar outdoor lighting';
                    } else {
                        greenResource = 'Ductless mini-split heat pump';
                    }
                } else if (budget.value === 'moderate') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Smart home energy management system';
                    } else {
                        greenResource = 'High-efficiency air conditioner';
                    }
                } else {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Net-zero energy home construction;                        ';
                    } else {
                        greenResource = 'Ground source heat pump';
                    }}}
        } else{
            if (energyConsumption.value === 'low') {
                if (budget.value === 'low') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Biomass heating system';
                    } else {
                        greenResource = 'Energy-efficient stove/oven';
                    }
                } else if (budget.value === 'moderate') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Hydroelectric generator';
                    } else {
                        greenResource = 'Solar-powered outdoor lighting';
                    }
                } else {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Off-grid solar power system';
                    } else {
                        greenResource = 'Energy-efficient water pump';
                    }
                }
            } else if (energyConsumption.value === 'moderate') {
                if (budget.value === 'low') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Small-scale wind turbine';
                    } else {
                        greenResource = 'Solar ventilation fan';
                    }
                } else if (budget.value === 'moderate') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Biofuel heating system';
                    } else {
                        greenResource = 'Solar-powered well pump';
                    }
                } else {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Greenhouse for food production';
                    } else {
                        greenResource = 'High-efficiency geothermal system';
                    }
                } 
            } else if (energyConsumption.value === "high") {
                if (budget.value === 'low') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Solar-powered gate opener';
                    } else {
                        greenResource = 'Rainwater collection system';
                    }
                } else if (budget.value === 'moderate') {
                    if (suitableSpace.value === 'yes') {
                        greenResource = 'Agricultural wind turbine';
                    } else {
                        greenResource = 'Solar livestock water heater';
                    }
                } else {
                    greenResource = 'Ground Source Pump';
                }}
        }
    }

    document.getElementById('result').innerHTML = `Based on your choices, we recommend: ${greenResource}`;
}

