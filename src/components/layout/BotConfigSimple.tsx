import Bot from "../../classes/bot";
import { useBots } from "../../context/botsContext";
import { useState } from "react";

interface BotConfigSimpleProps {
  bot: Bot;
}

const BotConfigSimple = ({ bot }: BotConfigSimpleProps) => {
  const { editBot } = useBots();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      {!showOptions ? (
        <div>
          <h2>Choose Your Bot's Name</h2>
          <label htmlFor="name">Bot name:</label>
          <input
            id="name"
            name="name"
            type="text"
            defaultValue={bot.name}
            onChange={(e) => {
              editBot(bot.id, "name", e.target.value);
            }}
          />
          <button onClick={() => setShowOptions(true)}>next</button>
        </div>
      ) : (
        <>
          <label htmlFor="booleanValue">
            Boolean Value 0{" "}
            <input
              type="radio"
              name="value"
              value="0"
              onChange={(e) => {
                editBot(bot.id, "value", e.target.value);
              }}
            />
            1{" "}
            <input
              type="radio"
              name="value"
              value="1"
              onChange={(e) => {
                editBot(bot.id, "value", e.target.value);
              }}
            />
          </label>
          <br />
          <label htmlFor="operator">
            Boolean Operator:
            <select
              name="operator"
              defaultValue={bot.operator}
              onChange={(e) => {
                editBot(bot.id, "operator", e.target.value);
              }}
            >
              <option value="AND">AND</option>
              <option value="OR">OR</option>
              <option value="NOR">NOR</option>
              <option value="NOT">NOT</option>
            </select>
          </label>
          <label htmlFor="speed">
            <input
              type="range"
              name="speed"
              min="1"
              max="4"
              defaultValue={bot.speed}
              onChange={(e) => {
                editBot(bot.id, "speed", e.target.value);
              }}
            />
          </label>
          <label htmlFor="direction">
            Starting direction:
            <select
              name="direction"
              defaultValue={bot.direction}
              onChange={(e) => {
                editBot(bot.id, "direction", e.target.value);
              }}
            >
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="East">East</option>
              <option value="West">West</option>
            </select>
          </label>
          <button onClick={() => setShowOptions(false)}>prev</button>
        </>
      )}
    </>
  );
};

export default BotConfigSimple;
