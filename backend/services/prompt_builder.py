def build_prompt(data):
    destination = data["destination"]
    days = data["days"]
    budget = data["budget"]
    travelers = data["travelers"]
    interests = ", ".join(data["interests"])

    prompt = f"""
Create a travel itinerary for {destination}.

Number of days: {days}
Budget: ₹{budget}
Number of travelers: {travelers}
Interests: {interests}

For each day, suggest:
- Places to visit
- Activities
- Food suggestions
- Approximate cost

Important budget rules:
- The total cost for all days must not exceed the given budget.
- Calculate the daily costs carefully.
- Make sure the final budget summary matches the sum of all daily costs.
- Include accommodation, transportation, food, activities, and entry fees.
- Leave a small emergency buffer if possible.
"""

    return prompt

