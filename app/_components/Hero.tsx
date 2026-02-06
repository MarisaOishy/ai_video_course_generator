import React from "react";
import { Send } from "lucide-react";

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";

import { QUICK_VIDEO_SUGGESTIONS } from "@/data/constant";

function Hero() {
  return (
    <div className="relative">

      {/* Background Blurs */}
      <div className="absolute pointer-events-none -bottom-40 -left-40 h-[500px] w-[500px] bg-purple-400/20 blur-[120px] rounded-full" />
      <div className="absolute pointer-events-none top-20 left-1/3 bottom-[-200px] h-[500px] w-[500px] bg-pink-400/20 blur-[120px] rounded-full" />
      <div className="absolute pointer-events-none -bottom-20 right-1/3 h-[500px] w-[500px] bg-blue-400/20 blur-[120px] rounded-full" />
      <div className="absolute pointer-events-none top-[200px] left-1/2 h-[500px] w-[500px] bg-sky-400/20 blur-[120px] rounded-full" />

      {/* Heading */}
      <div className="relative z-10 flex items-center flex-col mt-20">
        <h2 className="text-4xl font-bold text-center">
          Learn Smarter With{" "}
          <span className="text-primary">AI Video Courses</span>
        </h2>

        <p className="text-center text-lg mt-4 text-muted-foreground max-w-2xl">
          Unlock your potential with personalized AI video courses.
        </p>
      </div>

      {/* Input Area */}
      <div className="relative z-10 flex items-center  justify-center mt-10">
        <div className="w-full max-w-lg">

          <InputGroup>

            <InputGroupTextarea
              className="min-h-24 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base md:text-sm"
              placeholder="Describe what you want to learn..."
            />

            <InputGroupAddon align="block-end">
              <div className="flex w-full items-center justify-between gap-2">

                <NativeSelect>
                  <NativeSelectOption value="full-course">
                    Full Course
                  </NativeSelectOption>
                  <NativeSelectOption value="quick-explain-video">
                    Quick Explain Video
                  </NativeSelectOption>
                </NativeSelect>

                <InputGroupButton size="sm">
                  <Send className="w-4 h-4" />
                </InputGroupButton>

              </div>
            </InputGroupAddon>

          </InputGroup>

        </div>
      </div>

      {/* Suggestions */}
      <div className="relative z-10 flex flex-col items-center gap-3 mt-6">

        {/* Row 1 */}
        <div className="flex gap-4">
          {QUICK_VIDEO_SUGGESTIONS.slice(0, 4).map((suggestion) => (
            <span
              key={suggestion.id}
              className="relative z-10 border rounded-full px-4 py-1 text-sm whitespace-nowrap
                         cursor-pointer hover:bg-primary hover:text-white transition"
            >
              {suggestion.title}
            </span>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-4 justify-center">
          {QUICK_VIDEO_SUGGESTIONS.slice(4, 6).map((suggestion) => (
            <span
              key={suggestion.id}
              className="relative z-10 border rounded-full px-4 py-1 text-sm whitespace-nowrap
                         cursor-pointer hover:bg-primary hover:text-white transition"
            >
              {suggestion.title}
            </span>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Hero;
