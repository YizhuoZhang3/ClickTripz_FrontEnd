import react from "react";

export default function TimeZone({handleChangeAccountType, value}){
  return(
    <select name="timezone" value={value} onChange={handleChangeAccountType}>
      <option name="timezone" value="Europe/Rome">Europe/Rome</option>
      <option name="timezone" value="America/Mexic">America/Mexico</option>
      <option name="timezone" value="Pacific/Easter">Pacific/Easter</option>
      <option name="timezone" value="America/Regina">America/Regina</option>
      <option name="timezone" value="America/Havana">America/Havana</option>
      <option name="timezone" value="Asian/Beijing">Asian/Beijing</option>
      <option name="timezone" value="Asian/Tokyo">Asian/Tokyo</option>
      <option name="timezone" value="Europe/Paris">Europe/Paris</option>

    </select>
  )
}