import {
  Button,
  Container,
  FormField,
  Inline,
  Input,
  Select,
  Stack,
} from "aws-northstar";
import { SelectOption } from "aws-northstar/components/Select";
import { group } from "console";
import { useEffect, useState } from "react";
import Network, {
  Facility,
  NetworkType,
  Segment,
} from "../../../model/Network";

export type SegmentSelection = {
  group?: string;
  facility?: string;
  segment?: string;
};

export default (props: any) => {
  const net: NetworkType = {
    facilities: [
      { id: "n_1", group: "north", segments: [] },
      { id: "n_2", group: "north", segments: [] },
      { id: "n_3", group: "north", segments: [] },
      { id: "b", group: "east", segments: [] },
      { id: "c", group: "south", segments: [] },
      { id: "d", group: "west", segments: [] },
    ].map((fac) => ({
      id: fac.id,
      group: fac.group,
      segments: [1, 2, 3, 4].map((i) => ({ id: `${fac.id}_${i}`, ways: [] })),
    })),
  };

  const [selection, setSelection] = useState<SegmentSelection>({});

  const optionsGroups = Network.listGroups(net).map((id) => ({
    label: id,
    value: id,
  }));

  const optionsFacilities = selection.group
    ? Network.filterFacilities(net, selection.group).map((facility) => ({
        label: facility.id,
        value: facility.id,
      }))
    : [];

  const optionsSegments = selection.facility
    ? Network.getFacility(net, selection.facility).segments.map((segment) => ({
        label: segment.id,
        value: segment.id,
      }))
    : [];

  return (
    <Container title="Find Facility">
      <Stack>
        <FormField controlId="group">
          <Select
            placeholder="Choose a group"
            options={optionsGroups}
            selectedOption={{ label: selection.group, value: selection.group }}
            onChange={(e: any) => setSelection({ group: e.target.value })}
          />
        </FormField>
        <FormField
          controlId="facility"
          secondaryControl={
            <Button variant="primary" disabled={!selection.group}>
              +
            </Button>
          }
        >
          <Select
            placeholder="Choose a facility"
            options={optionsFacilities}
            disabled={!optionsFacilities.length}
            selectedOption={{
              label: selection.facility,
              value: selection.facility,
            }}
            onChange={(e: any) =>
              setSelection({ group: selection.group, facility: e.target.value })
            }
          />
        </FormField>
        <FormField
          controlId="segment"
          secondaryControl={
            <Button variant="primary" disabled={!selection.facility}>
              +
            </Button>
          }
        >
          <Select
            placeholder="Choose a segment"
            options={optionsSegments}
            disabled={!optionsSegments.length}
            selectedOption={{
              label: selection.segment,
              value: selection.segment,
            }}
            onChange={(e: any) =>
              setSelection({ ...selection, segment: e.target.value })
            }
          />
        </FormField>
      </Stack>
    </Container>
  );
};
