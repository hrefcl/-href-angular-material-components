import {
  animate,
  AnimationTriggerMetadata,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

/**
 * Animations used by the Material datepicker.
 * @docs-private
 */
export const ngxMatDatepickerAnimations: {
  readonly transformPanel: AnimationTriggerMetadata;
  readonly fadeInCalendar: AnimationTriggerMetadata;
} = {
  /** Transforms the height of the datepicker's calendar. */
  transformPanel: trigger("transformPanel", [
    transition(
      "void => enter-dropdown",
      animate(
        "120ms cubic-bezier(0, 0, 0.2, 1)",
        keyframes([
          style({ opacity: 0, transform: "scale(1, 0.8)" }),
          style({ opacity: 1, transform: "scale(1, 1)" }),
        ]),
      ),
    ),
    transition(
      "void => enter-dialog",
      animate(
        "150ms cubic-bezier(0, 0, 0.2, 1)",
        keyframes([
          style({ opacity: 0, transform: "scale(0.7)" }),
          style({ transform: "none", opacity: 1 }),
        ]),
      ),
    ),
    transition("* => void", animate("100ms linear", style({ opacity: 0 }))),
  ]),

  /** Fades in the content of the calendar. */
  fadeInCalendar: trigger("fadeInCalendar", [
    state("void", style({ opacity: 0 })),
    state("enter", style({ opacity: 1 })),

    // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
    // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
    transition(
      "void => *",
      animate("120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"),
    ),
  ]),
};
