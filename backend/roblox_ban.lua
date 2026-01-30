
local HttpService = game:GetService("HttpService")
local url = "https://YOUR_DOMAIN/ban"

game.Players.PlayerAdded:Connect(function(player)
 local response = HttpService:GetAsync("https://YOUR_DOMAIN/bans")
 local bans = HttpService:JSONDecode(response)
 for _,ban in pairs(bans) do
  if ban.userid == player.UserId then
   player:Kick("Banned: "..ban.reason)
  end
 end
end)
