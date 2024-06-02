import db from "../../db";

/**
export const listAnnouncements = async (
  networkId: string
): Promise<Announcement[]> => {
  return db.announcement.findMany({
    where: { networkId },
    select: {
      id: true,
      title: true,
      description: true,
      date: true,
      createdAt: true,
      updatedAt: true,
      networkId: true,
    },
  });
};

// @desc    Lists one announcement regarding its ID
export const getAnnouncement = async (
  id: string
): Promise<Announcement | null> => {
  return db.announcement.findUnique({
    where: {
      id,
    },
  });
};

// @desc    Creates announcement
export const createAnnouncement = async (
  announcement: Omit<Announcement, "id">,
  networkId: string
): Promise<Announcement> => {
  const { title, description, date } = announcement;

  return db.announcement.create({
    data: {
      title,
      description,
      date,
      networkId,
    },
  });
};

// @desc    Deletes announcement regarding its ID
export const removeAnnouncement = async (id: string): Promise<Announcement> => {
  return db.announcement.delete({
    where: {
      id,
    },
  });
};
 */

export default function () {
  return true;
}
